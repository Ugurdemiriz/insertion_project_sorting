provider "aws" {
  region = var.region
}

resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type

  user_data = templatefile("${path.module}/cloud-config.yaml.tpl", {})
}
