1. What is the difference between a Launch Template and an AMI?

Launch templates are created on use, so are updated with the latest versions of any software installed on them
from package managers, can be versioned.

AMIs are snapshots of one particular instance, essentially a copy.

2. Give an example of a scenario where an auto scaler might add more instances

If there is less than the minimum capacity, e.g. an instance has terminated

3. Give an example of a scenario where an auto scaler might terminate instances

If there is more than the defined maximum number of instances, perhaps a period of high demand has completed and 
surplus processing power is no longer required.

4. What are some advantages of using an auto scaler?

Can be used to create instances when under heavy load, and can scale down when not, so reducing costs, reducing electricity usage (greener).

5. What kind of metrics might be monitored to trigger an auto scaler to change the amount of instances available?

Anything you can get out of CloudWatch, so RAM, CPU usage, maybe a custom script to call the application to see if it's under heavy load.