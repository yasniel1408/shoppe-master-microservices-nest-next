resource "aws_amplify_app" "web" {
  name       = "web"
  repository = "https://github.com/yasniel1408/next14-cloudfront-config"
  # access_token = "your-github-access-token" # Si el repositorio es privado
  # oauth_token  = "your-oauth-token"         # Si el repositorio es privado

  environment_variables = {
    NEXT_PUBLIC_API_URL = "https://api.example.com"
  }

  build_spec = <<-EOT
  version: 1.0
  frontend:
    phases:
      preBuild:
        commands:
          - yarn install
      build:
        commands:
          - yarn build
    artifacts:
      baseDirectory: .next
      files:
        - '**/*'
    cache:
      paths:
        - node_modules/**/*
  EOT

  tags = {
    Name = "web"
  }
}

# resource "aws_amplify_domain_association" "web_domain" {
#   app_id      = aws_amplify_app.web.id
#   domain_name = aws_route53_zone.main.name

#   sub_domain {
#     prefix      = "www"
#     branch_name = "main" # Cambia esto según tu configuración
#   }
# }