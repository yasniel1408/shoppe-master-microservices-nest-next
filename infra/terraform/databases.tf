data "aws_region" "current" {}

resource "aws_db_instance" "identity-db-potgres" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "postgres"
  engine_version       = "11.5"
  instance_class       = "db.t2.micro"
  username             = "postgres"
  password             = "postgres"
  parameter_group_name = "default.postgres11"
  publicly_accessible  = true
  skip_final_snapshot  = true
  vpc_security_group_ids = [aws_security_group.postgres.id]
  db_subnet_group_name = aws_db_subnet_group.postgres.name
  tags = {
    Name = "postgres"
  }
}

resource "aws_db_instance" "inventory-db-mysql" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.micro"
  username             = "root"
  password             = "root"
  parameter_group_name = "default.mysql5.7"
  publicly_accessible  = true
  skip_final_snapshot  = true
  vpc_security_group_ids = [aws_security_group.mysql.id]
  db_subnet_group_name = aws_db_subnet_group.mysql.name
  tags = {
    Name = "mysql"
  }
}

resource "aws_db_instance" "payment-db-mysql" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.micro"
  username             = "root"
  password             = "root"
  parameter_group_name = "default.mysql5.7"
  publicly_accessible  = true
  skip_final_snapshot  = true
  vpc_security_group_ids = [aws_security_group.mysql.id]
  db_subnet_group_name = aws_db_subnet_group.mysql.name
  tags = {
    Name = "mysql"
  }
}

resource "aws_elasticache_cluster" "expiration-db-redis" {
  cluster_id           = "cache-redis"
  engine               = "redis"
  engine_version       = "5.0.6"
  node_type            = "cache.t2.micro"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis5.0"
  port                 = 6379
  subnet_group_name    = aws_elasticache_subnet_group.redis.name
  tags = {
    Name = "cache-redis"
  }
}

resource "aws_elasticsearch_domain" "search-db-es" {
  domain_name           = "es"
  elasticsearch_version  = "7.1"
  cluster_config {
    instance_type = "t2.small.elasticsearch"
  }
  ebs_options {
    ebs_enabled = true
    volume_size = 10
  }
  tags = {
    Name = "es"
  }
}

resource "aws_dynamodb_table" "ecommerce-db-dynamodb" {
  name           = "ecommerce-db-dynamodb"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"
  attribute {
    name = "id"
    type = "S"
  }
  tags = {
    Name = "order"
  }
}
