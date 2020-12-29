# Projects

## iQO2 

iQO2 is a comprehensive software for endurance athletes, coaches and teams designed to train smarter and optimize performance with powerful tools to plan and analyze training sessions and races.

Our software is being used daily by professional teams and sport federations like Topsport Vlaanderen - Baloise team , WM3 Pro Cycling Team , Lotto-Soudal Cycling Team , Cibel Team , Granville , Veranda Willems-Crelan , Royal Belgian Cycling Federation  and many professional coaches and test centers.

### DB Migration

Migrated the existing SQL Server database to AWS Aurora MySQL hereby reducing cost by a factor of 10. Created HAProxy solution to allow direct DB connections over a standard 443 port to prevent firewall blocking.

### Mobile Application

[![apple_appstore](/assets/images/apple_appstore.png)](https://apps.apple.com/us/app/iqo2/id1330388026?ls=1)
[![google_playstore](/assets/images/google_playstore.png)](https://play.google.com/store/apps/details?id=com.iqo2.tracker)

Created a mobile app in **React Native**. In the app coaches and athletes can keep track of their progress and view both planned and executed workouts. Athletes can keep track of their body metrics and also view their training zones.

This app has push notifications support and is backed by technologies such as **Redux**, **Redux Saga**, **Firebase**, **Mapbox**, **D3**, **Styled Components** and **React Navigation**.

![Login](/assets/images/iqo2/Login.png)
![Feed](/assets/images/iqo2/Feed.png)
![Contacts](/assets/images/iqo2/Contacts.png)
![Contact_Summary](/assets/images/iqo2/Contact_Summary.png)
![Contact_Metrics](/assets/images/iqo2/Contact_Metrics.png)
![Event_Detail](/assets/images/iqo2/Event_Detail.png)
![Event_Map](/assets/images/iqo2/Event_Map.png)
![Event_Zones](/assets/images/iqo2/Event_Zones.png)
![Planned_Workout](/assets/images/iqo2/Planned_Workout.png)
![Contact_Zones](/assets/images/iqo2/Contact_Zones.png)


### API

Created a brand new https API using **Typescript**, **Node.js** and **Koa.js**. User authentication was implemented using **JSON Web Tokens**. The API is fully tested with a test coverage of **98%**. Wrote a custom push notification integration allowing for targeted communication between coaches and athletes.

For backwards compatibility, path based routing was introduced on the load balancer to allow for a seamless transition from the V1 version to the V2 version.

