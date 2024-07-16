provider "aws" {
  region                      = "us-east-1"
  profile                     = "myaccount" # Asegúrate de que este perfil esté configurado en tus credenciales de AWS
  skip_credentials_validation = false
  skip_metadata_api_check     = false
  skip_requesting_account_id  = false
  skip_region_validation      = false
  s3_use_path_style           = false

  default_tags {
    tags = {
      Environment = "Production"
      Service     = "MyServicesAWS"
    }
  }
}

terraform {
  required_version = "1.5.2"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.60.0, <= 4.22.0"
    }
  }
}
