+++
title = 'Erlang based chat application using distributed systems.'
date = 2024-06-17T14:54:57+03:00
draft = false
summaryText = "Erlchat is  a project combining my knowledge with modern frontend frameworks, websocket communication protocol and distributed systems architecture with Erlang. This project showcases sending and receiving messages via a websocket by using a distributed backend server to broadcast messages and keep a record of currently active clients."
+++

{{< figure src="/img/ErlChat/ErlChat.png" title="This is a screenshot from the app with two clients messaging. The info mesage is received by both clients when connected to the server. After that the client on the left has sent a message which the client on the right has received" alt="An alt text description" width="800px" height="auto" >}}

ErlChat is a web application for simple text based chat application developped using a highly concurrent programming language Erlang. This project combines my knowledge in distributed computing with Erlang, websocket communication protocols and dynamic Vue.js frontend framework.

# The Project Implementation

This project contains Vue.js web server for hosting the frontend application. The Vue.js frontend application utilizes websocket communication with the distributed backend server implemented with Erlang. Erlangs message based highly concurrent working model allows to scale applications vertically while still maintaining high availability. These are one of the reasons why it was used by WhatsApp and Klarna in the past.

## How it works

The main goal of the Erlang based backend server is to broadcast the received messages from one client to all other currently connected clients. This way the application works as demonstration for an "anonymous" chat room. Note that this implementation only demonstrates the message passing and websocket comunication and therefore database for storing messages is left unimplemented.

The project initializes websockets specifically to allow the duplex communication between the clients and the backend server. The backend server then keeps a distributed record for all the currently connected clients and when connections close or new connections appear the record gets updated accordingly. Erlangs concurrent working model allows to scale the application horizontally as each websocket connection can be its own standalone process.

The Vue.js frontend is divided to individual components communicating and sharing data using Vue directives. For a larger application might be suitable to use state management library such as Pinia etc but for this demonstration Vues own directives are the most simple way to handle events from received and sent messages.

{{< github repo="TheKaski/ErlChat" text="Code in my github">}}
