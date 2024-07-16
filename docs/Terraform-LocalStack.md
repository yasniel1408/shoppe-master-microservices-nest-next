# Install

```
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

## Install manual

curl -LO https://releases.hashicorp.com/terraform/1.5.2/terraform_1.5.2_darwin_amd64.zip
unzip terraform_1.5.2_darwin_amd64.zip
sudo mv terraform /usr/local/bin/
terraform -v

# Configure AWS to Local Stack

## Paso 1

aws configure
aws configure --profile localstack

export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
export AWS_DEFAULT_REGION=us-east-1
export EDGE_PORT=4566
export AWS_ENDPOINT_URL=http://localhost:$EDGE_PORT

## Paso 2

Agrega este perfil en ~/.aws/config

[profile localstack]
region = us-east-1
output = json
aws_access_key_id = test
aws_secret_access_key = test
endpoint_url = http://localhost:4566

## Swichar a la cuenta de localstack

aws --profile localstack s3 ls
