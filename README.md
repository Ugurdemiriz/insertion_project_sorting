# Insertion Project Sorting

This repository now includes a simple Terraform setup for launching an EC2 instance.

## Terraform

The Terraform configuration is located in the `terraform/` directory. The instance uses the `cloud-config.yaml.tpl` template for user data, which writes a file to `/etc/example.txt` on boot.

### Setup

1. Install [Terraform](https://terraform.io/).
2. Configure your AWS credentials (e.g., via `aws configure` or environment variables).
3. Update the variables in `terraform/variables.tf` or provide them via `terraform.tfvars`.
4. From the `terraform/` directory run:
   ```bash
   terraform init
   terraform apply
   ```

This will create a single EC2 instance using the specified AMI and region.
