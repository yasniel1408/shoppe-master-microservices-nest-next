data "aws_region" "current" {}

resource "aws_eks_cluster" "local-cluster" {
  name     = "local-cluster"
  role_arn = aws_iam_role.eks_role.arn
  vpc_config {
    subnet_ids = aws_subnet.public.*.id
  }
  depends_on = [aws_iam_role_policy_attachment.eks_policy_attachment]
}