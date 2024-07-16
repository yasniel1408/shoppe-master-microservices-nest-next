resource "aws_db_instance" "identitydbpostgres" {
  allocated_storage    = 10
  db_name              = "identitydbpostgres"
  engine               = "postgres"
  engine_version       = "11.5"
  instance_class       = "db.t3.micro"
  username             = "postgres"
  password             = "postgres"
  parameter_group_name = "default.postgres11"
  skip_final_snapshot  = true

  vpc_security_group_ids = [aws_security_group.postgres.id]
  db_subnet_group_name   = aws_db_subnet_group.postgres.name

  publicly_accessible = true

  tags = {
    Name = "postgres"
  }
}

# resource "aws_db_instance" "inventorydbmysql" {
#   allocated_storage    = 10
#   db_name              = "inventorydbmysql"
#   engine               = "mysql"
#   engine_version       = "8.0"
#   instance_class       = "db.t3.micro"
#   username             = "root"
#   password             = "root"
#   parameter_group_name = "default.mysql8.0"
#   skip_final_snapshot  = true

#   vpc_security_group_ids = [aws_security_group.mysql.id]
#   db_subnet_group_name   = aws_db_subnet_group.mysql.name

#   publicly_accessible = true

#   tags = {
#     Name = "mysql"
#   }
# }

# resource "aws_db_instance" "paymentdbpostgres" {
#   allocated_storage    = 10
#   db_name              = "paymentdbpostgres"
#   engine               = "postgres"
#   engine_version       = "11.5"
#   instance_class       = "db.t3.micro"
#   username             = "postgres"
#   password             = "postgres"
#   parameter_group_name = "default.postgres11"
#   skip_final_snapshot  = true

#   vpc_security_group_ids = [aws_security_group.postgres.id]
#   db_subnet_group_name   = aws_db_subnet_group.postgres.name

#   publicly_accessible = true

#   tags = {
#     Name = "postgres"
#   }
# }
