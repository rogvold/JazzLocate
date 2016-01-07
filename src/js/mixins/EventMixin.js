/**
 * Created by sabir on 06.12.15.
 */

var Parse = require('parse').Parse;
var ParseMixin = require('./ParseMixin');


var EventMixin = {

    transformEvent: function(parseEvent){
        if (parseEvent == undefined){
            return undefined;
        }
        return {
            id: parseEvent.id,
            eventId: parseEvent.id,
            name: parseEvent.get('name'),
            description: parseEvent.get('description'),
            avatar: parseEvent.get('avatar'),
            content: parseEvent.get('content'),
            address: parseEvent.get('address'),
            timestamp: parseEvent.get('timestamp'),
            creatorId: parseEvent.get('creatorId')
        }
    },

    loadEvent: function(eventId, callback){
        var self = this;
        this.loadEventById(eventId, function(e){
            callback(self.transformEvent(e));
        });
    },

    loadAllEvents: function(callback){
        var self = this;
        var q = new Parse.Query('Event');
        q.limit(1000);
        q.addDescending('timestamp');
        q.find(function(results){
            var arr = results.map(function(ev){
                return self.transformEvent(ev);
            });
            callback(arr);
        });
    },

    migrateTestEvents: function(){

        var list=[
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "1",
                "name":"Astoria Jazz Hang",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/20498492.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "2",
                "name":"New York Wine and Coffee and Jazz Social Group",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/440365537.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "3",
                "name":"Jazz Explorations",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/440239888.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "4",
                "name":"The NYC Jazz Meetup Group",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/2196853.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "5",
                "name":"NYC Jazz and Blues Music & Social Club Meetup",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/439081686.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "6",
                "name":"New York A Cappella Jazz Singers Meetup",
                "img":"http://static1.meetupstatic.com/img/6569756953012259980/journey/simple/no_photo1.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "7",
                "name":"New York City Live Jazz Music Meetup",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/438792533.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "8",
                "name":"Janelle Jazz With U Lovers International",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/363790262.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "9",
                "name":"New York Ragtime & Traditional Jazz Music Meetup",
                "img":"http://static1.meetupstatic.com/img/96701895124050148/journey/simple/no_photo3.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "10",
                "name":"New York Live Jazz Meetup",
                "img":"http://static1.meetupstatic.com/img/6569756953012259980/journey/simple/no_photo1.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "11",
                "name":"Free Live Jazz in New York City",
                "img":"http://static1.meetupstatic.com/img/9634477557299433531/journey/simple/no_photo5.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "12",
                "name":"Tune Up!",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/435457887.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "13",
                "name":"Jersey City Dancing - Ballroom, Latin, Swing, Tango & More!",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/437331565.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "14",
                "name":"Swing Dance Astoria & LIC Meetup",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/439830216.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "15",
                "name":"The New York City Live Music Meetup",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/201335972.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "16",
                "name":"Carnegie Hall & Lincoln Center Concertgoers",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/348029092.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "17",
                "name":"NYC Jam",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/293443062.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "18",
                "name":"Live French/Jazz music in NYC",
                "img":"http://static1.meetupstatic.com/img/96701895124050148/journey/simple/no_photo3.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "19",
                "name":"CircleSinging NYC Vocal Improvisation Meetup",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/438698154.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "20",
                "name":"Let's Talk Music NYC Meetup",
                "img":"http://static1.meetupstatic.com/img/229912691260132349520/journey/simple/no_photo4.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "21",
                "name":"JazzyTuesdays",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/443055376.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "22",
                "name":"I wanted to do that...Just not alone!!",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/442379749.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "23",
                "name":"Evenings & Weekends in New York City",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/441891734.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "24",
                "name":"Concerts in NYC! Discount Broadway Tickets! New York Shows!",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/154513002.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "25",
                "name":"New York & New Jersey \"Chicago Style\" Steppers",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/436464434.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "26",
                "name":"NYC: R&B/Soul Concert Meetup",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/439818603.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "27",
                "name":"Women About in NYC & Westchester",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/5761017.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "28",
                "name":"Empire Line Dancers(NYC)",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/435838115.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "29",
                "name":"Gay Catholics, Christians & Friends - Social Group",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/439070211.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "30",
                "name":"Fit and Fun and Active Singles",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/441061341.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "31",
                "name":"The New York Chamber Music Meetup",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/436934263.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "32",
                "name":"NYC Arab Singles",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/303879722.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "33",
                "name":"Starting a Great Band",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/441770820.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "34",
                "name":"** NY Pin Up Club **  - Photos, Modeling, Burlesque, & more!",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/442031087.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "35",
                "name":"NYC Multi-Cultural Meetup",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/918362.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "36",
                "name":"CryptoCircle a Social Bitcoin Meetup",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/407852122.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "37",
                "name":"Harlem & NYC Live Music & Comedy Events Meetup",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/434847817.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "38",
                "name":"Naach Xpress- Dance and Exercise the Bollywood way!",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/337676382.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "39",
                "name":"ADAM & EVE NYC 40+ CLUB",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/12853134.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "40",
                "name":"New York Piano Group",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/435110804.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "41",
                "name":"Conservatives in the Arts",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/32311911.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "42",
                "name":"New York Swing Dancing for Modern Dancers",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/437944960.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "43",
                "name":"New York Social After Work Club",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/206808242.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "44",
                "name":"The New York City House Music Group",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/8080650.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "45",
                "name":"AfroJam",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/194439202.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "46",
                "name":"New York City Grateful Dead Song and Jam Meetup",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/317426452.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "47",
                "name":"Keeping The Blues Alive",
                "img":"http://static1.meetupstatic.com/img/229912691260132349520/journey/simple/no_photo4.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "48",
                "name":"Business-Strategy for Performers.",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/441836572.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "49",
                "name":"The NYC Vinyl Meetup",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/19493265.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "50",
                "name":"NYC Funk...  LIVE!",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/269055562.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "51",
                "name":"SILLY DATE! NEW YORK",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/377779372.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "52",
                "name":"NYC Black Professional Women: Fine Dining & Upscale Events",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/114089732.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "53",
                "name":"Nippon Food Club of NYC",
                "img":"http://photos2.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/7471918.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "54",
                "name":"The VOCAL BRILLIANCE Group: Singing, Performing, & Education",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/234286342.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "55",
                "name":"Bollywood Funk NYC Dance School",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/92300392.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "56",
                "name":"The New York Experimental Music Meetup Group",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/6685529.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "57",
                "name":"5RhythmsÂ® NYC, Saturday Mornings",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/16879353.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "58",
                "name":"Things To Do in New York and Beyond",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/119795772.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "59",
                "name":"New York Brazilian Film Group",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/184198052.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "60",
                "name":"Sing for Joy! (New York)",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/431664591.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "61",
                "name":"I'm not sure I belong here, but we're here--so let's enjoy!",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/335173532.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "62",
                "name":"NYC INDIE MUSIC - House Concerts!",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/143607982.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "63",
                "name":"Left Bank (Jersey City/Hoboken/Weehawken) French Language",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/209943942.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "64",
                "name":"Great Poetry: read /discuss / learn to love--in Mahattan",
                "img":"http://static1.meetupstatic.com/img/6569756953012259980/journey/simple/no_photo1.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "65",
                "name":"Data Warehousing and All That Jazz",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/281853232.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "66",
                "name":"AfrikanViolets & Friends (NJ/NY)",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/418347442.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "67",
                "name":"A \"Wonderful Christmastime\" Concert",
                "img":"http://static1.meetupstatic.com/img/6569756953012259980/journey/simple/no_photo1.png"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "68",
                "name":"Make and Take Crochet",
                "img":"http://photos4.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/435611739.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "69",
                "name":"Piano Outreach of New York",
                "img":"http://photos3.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/338099792.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "70",
                "name":"Live music loving Women of NYC",
                "name":"Live music loving Women of NYC",
                "img":"http://photos1.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/436695782.jpeg"
            },
            {
                "desc" : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. <br> <br> Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
                "id": "71",
                "name":"The Soon to be, New York City Working Acoustic Band",
                "img":"http://static1.meetupstatic.com/img/229912691260132349520/journey/simple/no_photo4.png"}
        ];


        var arr = [];
        var Event = Parse.Object.extend('Event');
        for (var i in list){
            var ev = new Event();
            ev.set('name', list[i].name);
            ev.set('avatar', list[i].img);
            ev.set('description', list[i].desc.substring(0, 100) + ' ...');
            ev.set('content', list[i].desc.replace(/\n/g, '<br/>'));
            ev.set('creatorId', 'HasVAmizTI')
            arr.push(ev);
        }
        Parse.Object.saveAll(arr);
    },



    loadEventById: function(eventId, callback){
        if (eventId == undefined){
            return;
        }
        var q = new Parse.Query('Event');
        q.get(eventId, function(result){
            callback(result);
        });
    },

    createEvent: function(creatorId, name, description, content, avatar, address, timestamp, callback){
        if (creatorId == undefined){
            return;
        }
        var self = this;
        var Event = Parse.Object.extend('Event');
        var ev = new Event();

        ev = ParseMixin.safeSet(ev, [{name: 'creatorId', value: creatorId},
            {name: 'name', value: name},
            {name: 'description', value: description},
            {name: 'content', value: content},
            {name: 'address', value: address},
            {name: 'timestamp', value: timestamp},
            {name: 'avatar', value: avatar}
        ]);

        ev.save().then(function(savedEvent){
            callback(self.transformEvent(savedEvent));
        });
    },

    updateEvent: function(eventId, name, description, content, avatar, address, timestamp, callback){
        var self = this;
        this.loadEventById(eventId, function(pEvent){
            pEvent = ParseMixin.safeSet(pEvent, [{name: 'name', value: name},
                                         {name: 'description', value: description},
                                         {name: 'avatar', value: avatar},
                                         {name: 'address', value: address},
                                         {name: 'timestamp', value: timestamp},
                                         {name: 'content', value: content}]);
            pEvent.save().then(function(updatedEvent){
                callback(self.transformEvent(updatedEvent));
            });
        });
    },

    deleteEvent: function(eventId, callback){
        this.loadEventById(eventId, function(ev){
            ev.destroy({
                success: function(){
                    callback();
                }
            });
        });
    }


}

module.exports = EventMixin;