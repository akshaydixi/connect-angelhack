#!/bin/bash

# Invoke the Forever module ( to START our nodejs server)
./node_modules/forever/bin/forever \
	start hello.js \
	-al forever.log \
	-ao output.log \
	hello.js
