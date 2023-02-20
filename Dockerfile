FROM ubuntu:18.04

WORKDIR app

RUN apt update
RUN apt install -y software-properties-common apt-transport-https curl
RUN curl -sL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
RUN add-apt-repository 'deb https://deb.nodesource.com/node_14.x bionic main'
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN add-apt-repository 'deb https://dl.yarnpkg.com/debian/ stable main'
RUN apt update


RUN DEBIAN_FRONTEND=noninteractive apt install -y nodejs yarn

COPY . /app

RUN cd /app && \
    yarn install && npx playwright install-deps && \
    npx playwright install

CMD cucumber-js
