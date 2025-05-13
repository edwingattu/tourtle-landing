
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
