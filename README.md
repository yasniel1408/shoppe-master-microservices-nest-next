# RabbitMq

https://docs.nestjs.com/microservices/rabbitmq

# Crear ingress en el cluster

https://kubernetes.github.io/ingress-nginx/deploy/
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.0/deploy/static/provider/cloud/deploy.yaml

# Habilitar metricas en el cluster

https://github.com/kubernetes-sigs/metrics-server

kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/high-availability-1.21+.yaml

# Hacer peticiones GET via terminal

for i in {1..100}; do wget -q -O- http://shoppe-api.org/v1 > /dev/null; echo "Solicitud $i enviada"; done

for i in {1..100}; do wget -q -O- http://shoppe-api.org/v1; done

# Install Nest

## Instalaciones para todos los micros Base

```
npm i @nestjs/microservices class-transformer class-validator

```

## Instalaciones para base de datos postges

```
npm i @nestjs/typeorm typeorm

```
