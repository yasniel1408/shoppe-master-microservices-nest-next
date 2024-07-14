provider "aws" {
    region = "us-east-1"
    access_key = "fake-access-key"
    secret_key = "fake-access-key"
    skip_credentials_validation = true
    skip_metadata_api_check = true
    skip_requesting_account_id = true
    skip_region_validation = true
    s3_use_path_style = true

    endpoints {
        apigateway = "http://localhost:4567"
        cloudformation = "http://localhost:4581"
        cloudwatch = "http://localhost:4582"
        cloudwatchlogs = "http://localhost:4586"
        dynamodb = "http://localhost:4569"
        es = "http://localhost:4578"
        firehose = "http://localhost:4573"
        iam = "http://localhost:4593"
        kinesis = "http://localhost:4568"
        lambda = "http://localhost:4574"
        route53 = "http://localhost:4580"
        s3 = "http://localhost:4572"
        secretsmanager = "http://localhost:4584"
        ses = "http://localhost:4579"
        sns = "http://localhost:4575"
        sqs = "http://localhost:4576"
        ssm = "http://localhost:4583"
        stepfunctions = "http://localhost:4585"
        eks = "http://localhost:4596"
    }

    default_tags {
        tags = {
            Environment = "Local"
            Service = "Localstack"
        }
    }
}

terraform {
    required_version = "= 1.2.5"
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = ">= 3.60.0, <= 4.22.0"
        }
    }
}