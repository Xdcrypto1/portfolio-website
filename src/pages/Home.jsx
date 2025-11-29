import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import SkillTags from "../components/SkillTags";
import About from "./About";

export default function Home() {
    return (
        <div className="space-y-5 pb-5 grid place-items-center gap-0">
            <ProfileHeader />
            <SkillTags />
            <About id = "About"/>
        </div>
    );
}
