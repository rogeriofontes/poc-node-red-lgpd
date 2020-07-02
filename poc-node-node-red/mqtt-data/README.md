# mqtt-docker

Repository for wrapping `mosquitto` to be used together with `docker-compose`.

## Usage

```
$ git clone https://github.com/ralphtheninja/mqtt-docker.git
$ cd mqtt-docker && docker-compose up
```
# License
#MIT

for test mosquitto:

mosquitto_sub -h localhost -t temperatura

mosquitto_pub -h localhost -m "Mensagem" -t temperatura
