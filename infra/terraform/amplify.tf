data "aws_region" "current" {}

resource "apmlify" "web-front" {
  name = "web-front"
}