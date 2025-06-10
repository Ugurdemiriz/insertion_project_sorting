variable "region" {
  description = "AWS region"
}

variable "ami" {
  description = "AMI to use for the instance"
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}
