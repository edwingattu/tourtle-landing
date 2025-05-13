import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const TourtleLandingPage = () => (
  <div className="min-h-screen bg-white text-gray-800">
    <header className="bg-orange-500 py-10 text-center text-white">
      <h1 className="text-4xl font-bold mb-2">Tourtle</h1>
      <p className="text-xl">Travel Better. Together.</p>
      <div className="mt-6">
        <Button className="mx-2 bg-purple-800 text-white hover:bg-purple-900">Join the Waitlist</Button>
        <Button variant="outline" className="text-black">Explore Features</Button>
      </div>
    </header>

    <section className="p-8 text-center">
      <h2 className="text-3xl font-semibold mb-4">Group Trips, Made Easy.</h2>
      <p className="max-w-2xl mx-auto text-lg">
        Tourtle is the first-of-its-kind collaborative travel diary app built for real travelers. Plan. Share. Vote. Capture memories together – all in one place.
      </p>
      <Button className="mt-6 bg-purple-800 text-white hover:bg-purple-900">Get Early Access</Button>
    </section>

    <section className="bg-gray-50 py-12 px-8 text-center">
      <h3 className="text-2xl font-bold mb-6">Travel isn’t just a destination. It’s a shared story.</h3>
      <p className="max-w-xl mx-auto mb-4">
        Tourtle is where travel meets collaboration. Whether you’re road-tripping with friends, exploring Europe with family, or curating retreats, Tourtle brings everyone on the same page—literally.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
        <li><input type="radio" readOnly className="mr-2" />Real-time Itinerary Updates</li>
        <li><input type="radio" readOnly className="mr-2" />Group Polls & Suggestions</li>
        <li><input type="radio" readOnly className="mr-2" />Media Sharing & Trip Logs</li>
        <li><input type="radio" readOnly className="mr-2" />Permanent Digital Travel Journal</li>
      </ul>
    </section>

    <section className="py-12 px-8 text-center">
      <h3 className="text-2xl font-bold mb-6">Why Tourtle?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold text-lg mb-2">No more endless WhatsApp threads</h4>
            <p>Your plans deserve more than lost messages. Tourtle keeps everything organized and visible.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold text-lg mb-2">Decisions made easier</h4>
            <p>Let your group vote in-app. Quick, fair, and drama-free.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold text-lg mb-2">All memories. One place.</h4>
            <p>Photos, videos, voice notes—Tourtle keeps everyone’s content in one shared album.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold text-lg mb-2">Plans that stay flexible</h4>
            <p>Itinerary changed? Updates reflect for everyone instantly. No calls. No confusion.</p>
          </CardContent>
        </Card>
      </div>
    </section>

    <section className="bg-orange-50 py-12 px-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Built for Every Kind of Traveler</h3>
      <ul className="max-w-3xl mx-auto text-left">
        <li><strong>Family Trips</strong> – Manage chaos with shared checklists, schedules, and updates.</li>
        <li><strong>College Getaways</strong> – Poll your crew and vote for the next party spot.</li>
        <li><strong>Retreat Planners & Tour Guides</strong> – Curate professional itineraries with live updates and engagement.</li>
        <li><strong>Solo Explorers with Friends</strong> – Share your journey, live, and let others join in spirit.</li>
      </ul>
    </section>

    <section className="py-12 px-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
      <p className="mb-4">We’re letting in early users. Join the list and get exclusive updates.</p>
      <Button className="text-lg px-6 py-3 bg-purple-800 text-white hover:bg-purple-900">Join the Waitlist</Button>
    </section>

    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
      <p>Tourtle – Your Travel. Together. 🚀 Coming soon to the App Store & Google Play</p>
      <div className="mt-2 space-x-4">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  </div>
);

export default TourtleLandingPage;
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const TourtleLandingPage = () => (
  <div className="p-6 text-center">
    <h1 className="text-4xl font-bold text-orange-600 mb-4">Tourtle</h1>
    <p className="text-lg mb-6">Travel Better. Together.</p>
    <Button className="bg-purple-800 text-white hover:bg-purple-900">Join the Waitlist</Button>
  </div>
);

export default TourtleLandingPage;
