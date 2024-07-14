data "aws_region" "current" {}

resource "aws_sqs_queue" "create-product-sqs" {
  name = "create-product-sqs"
}