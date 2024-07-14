data "aws_region" "current" {}

data "aws_route53_zone" "shoppe_dev" {
  name = "shoppe.dev"
}

resource "aws_route53_record" "shoppe_dev_amplify" {
  zone_id = data.aws_route53_zone.shoppe_dev.zone_id
  name    = "shoppe.dev"
  type    = "A"
  alias {
    name                   = "example.amplify.com" # Necesitarás encontrar el nombre de dominio correcto para Amplify
    zone_id                = "AMPLIFY_ZONE_ID" # Necesitarás encontrar el ID de zona correcto para Amplify
    evaluate_target_health = true
  }
}

# Registros CNAME si es necesario
resource "aws_route53_record" "www_shoppe_dev_amplify" {
  zone_id = data.aws_route53_zone.shoppe_dev.zone_id
  name    = "www.shoppe.dev"
  type    = "CNAME"
  ttl     = 300
  records = ["example.amplify.com"] # Necesitarás encontrar el nombre de dominio correcto para Amplify
}