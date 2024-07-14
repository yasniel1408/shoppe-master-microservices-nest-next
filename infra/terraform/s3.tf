data "aws_region" "current" {}

resource "aws_s3_bucket" "product-img-bucket" {
  bucket = "product-img-bucket"
}