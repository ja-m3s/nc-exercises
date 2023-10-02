const { getInstructions } = require('../index.js');

const https = require('node:https');
const fs = require('fs');

jest.mock('node:https');
jest.mock('fs');

describe('getInstructions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should query the API and write instructions to a file', async () => {
    const response = {
      on: jest.fn().mockImplementation((event, packet) => {
        if (event === 'data') {
          packet(Buffer.from('{"key": "value"}'));
        }
        if (event === 'end') {
          packet();
        }
      }),
    };
    const request = {
      end: jest.fn(),
    };
    https.request.mockImplementation((options, callback) => {
      callback(response);
      return request;
    });

    const writeFileCallback = jest.fn().mockImplementation((filePath, data, callback) => {
      callback(null); // Simulate successful write
    });
    fs.writeFile.mockImplementation(writeFileCallback);

    await getInstructions();

    // Assert that https.request is called with the correct options
    expect(https.request).toHaveBeenCalledTimes(1);
    const expectedOptions = {
      hostname: 'nc-leaks.herokuapp.com',
      path: '/api/confidential',
      method: 'GET',
    };
    expect(https.request).toHaveBeenCalledWith(expectedOptions, expect.any(Function));

    // Assert that fs.writeFile is called with the correct arguments
    expect(fs.writeFile).toHaveBeenCalledTimes(1);
    expect(fs.writeFile).toHaveBeenCalledWith('./instructions.MD', '{"key":"value"}', expect.any(Function));

    // Assert that the request's end method is called
    expect(request.end).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if writeFile fails', async () => {
    const writeFileCallback = jest.fn().mockImplementation((filePath, data, callback) => {
      callback(new Error('Write failed'));
    });
    fs.writeFile.mockImplementation(writeFileCallback);

    await expect(getInstructions()).rejects.toThrow('Write failed');

    // Assert that fs.writeFile is called with the correct arguments
    expect(fs.writeFile).toHaveBeenCalledTimes(1);
    expect(fs.writeFile).toHaveBeenCalledWith('./instructions.MD', '{"key":"value"}', expect.any(Function));
  });
});
