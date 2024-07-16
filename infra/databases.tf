

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
  elasticsearch_version = "7.1"
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
  name         = "ecommerce-db-dynamodb"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  attribute {
    name = "id"
    type = "S"
  }
  tags = {
    Name = "order"
  }
}
