#Bloc Chat
Bloc Chat is a single page application Chat Room built using the AngularJS framework and Firebase database.

##Preview
Check out my [Netlify deploy](#) to see it in action.

##Project Summary

###List Chat Rooms
The first task in this project is to be able to list our chat rooms. This involved creating a few "fake rooms" in Firebase and configuring our application to receive them from the database. We set up a Room factory that would define all Room-related API queries. Using Firebase's child() method, we were able to pull down the "children" (room names) of the room category. We needed this info in an array and achieved that using the $firebaseArray service. Finally we set up a controller associated with the home template in a $state, injected the Room service and were able to display the rooms in the template using ng-repeat. 


###Create Chat Rooms
In order to create Chat Rooms, we needed to set up a Modal that would allow the user to enter the new chat room name and submit that data (ngClick). This was achieved with the UI Bootstrap library ($uibModal). This was injected as a dependency, an openModal function created in our Main controller that would reference the new Modal controller which contained the logic for the create and cancel buttons. The outcome: Being able to see our array of rooms update in real time.

###List Messages
Now that we could list and create chat rooms, we needed to now have the ability to list message according to room. First we set up some test messages in Firebase with username, content, a timestamp an room id categories. Next we created a Message factory that would define all message related API queries. This was configured similar to our Room factory but now we are using the child() method to pull messaages instead of rooms and in addition we used Firebase's orderbyChild() method to target the rooom id. Back in our Message factory we created the getByRoomId method that would associate our roomId with the message. The outcome: Being able to see our test messages according to the roomId that it was assigned to. 

###Set Username
Now we needed to have the ability to store a username. By using Angular's ngCookies module we were able to store this string in the browser. Next, we needed to prompt the user to enter this username at the start of the application via another modal. Angular has a .run() method that runs code when the app instance is created, and by using this we could require the user to enter a username prior to being able to use the chat application. We set up the BlocChatCookies module that would detect whether a username was present or if a username was new, and open a Modal (similar to how we configured the one before) and allow them to enter this information. This was configured without a cancel option and no ability to click off of this. The outcome: Being able to prompt a new user for their username and store this data in the browser's cookies. 

###Send Messages
Finally, we needed to be able to send messages. What is a chat program without being able to actually send messages? We set up a method in our Message factory that would send our message with the username, content, roomId, and timestamp data. This begins in our Main controller with our sendMessage function (which is actually what is injected as a dependency in our main HTML), that would pass the message content and room Id to our Message factory, which would then send the data to Firebase. Since we already have the logic that sends us messages from Firebase our real time loop is successful. 

###Current Status
Our application is currently without any frills and there is much more that I would like to add in the future such as a delete room and message option, perhaps private rooms or the ability to see who is online. For now, its a basic yet functional app and a great project for furthering my understanding of AngularJS. 

