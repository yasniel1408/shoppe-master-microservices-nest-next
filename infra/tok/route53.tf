# resource "aws_route53_zone" "main" {
#   name = "shoppe.dev" # Cambia esto al nombre de tu dominio
# }

# resource "aws_route53_record" "www" {
#   zone_id = aws_route53_zone.main.zone_id
#   name    = "www.shoppe.dev" # Cambia esto según tu configuración
#   type    = "A"

#   alias {
#     name                   = aws_amplify_app.web.default_domain
#     zone_id                = aws_route53_zone.main.zone_id
#     evaluate_target_health = true
#   }
# }

# # Registros CNAME si es necesario
# # resource "aws_route53_record" "www_shoppe_dev_amplify" {
# #   zone_id = data.aws_route53_zone.shoppe_dev.zone_id
# #   name    = "www.shoppe.dev"
# #   type    = "CNAME"
# #   ttl     = 300
# #   records = ["example.amplify.com"] # Necesitarás encontrar el nombre de dominio correcto para Amplify
# # }