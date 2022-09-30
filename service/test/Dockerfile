FROM hub.infore-robotics.cn/public/nginx-alpine:v1.20
MAINTAINER InforeRobot DevOps Team

ENV APP_HOME /var/www/html

COPY dist ${APP_HOME}/

RUN chmod -R 755 ${APP_HOME}

EXPOSE 80

WORKDIR ${APP_HOME}
