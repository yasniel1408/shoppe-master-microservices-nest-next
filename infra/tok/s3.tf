resource "aws_s3_bucket" "productimgbucket" {
  bucket = "productimgbucket"
  tags = {
    Name        = "Product Image Bucket"
    Environment = "Local"
  }
}