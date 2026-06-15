import { backendDistributedSystems, cloudAndAWS, cryptographyAndPrivacy, databasesAndStorage, devOpsAndInfrastructure, frontEndAndWeb, messagingAndStreaming, monitoringAndObservability, programmingLanguages, rustEcosystem, toolsAndCollaboration, type ThemedSkills } from "./themed_skills";

import './codingSkills.css';

export interface CodingSkillsItemProps {
    name: string
}

export function CodingSkillsItem(props: CodingSkillsItemProps) {
    return (
        <span className="coding-skills-item">
            {props.name}
        </span>
    );
}

export interface CodingSkillsSectionProps {
    themeSkills: ThemedSkills
}

export function CodingSkillsSection(props: CodingSkillsSectionProps) {
    const name = props.themeSkills.name;
    const skills = props.themeSkills.skills;
    return (
        <section className="skills-section">
            <h2 className="skills-header">{name}</h2>
            <span className="skills-block">
                {skills.map((item: string) => (
                    <CodingSkillsItem key={item} name={item} />
                ))}
            </span>
            <div className="separator"></div>
        </section>
    )
}

export function CodingSkillsDefault() {
    const languages = programmingLanguages();
    const backend = backendDistributedSystems();
    const rust = rustEcosystem();
    const frontendandweb = frontEndAndWeb();
    const cloud = cloudAndAWS();
    const databases = databasesAndStorage();
    const devops = devOpsAndInfrastructure();
    const monitoring = monitoringAndObservability();
    const messaging = messagingAndStreaming();
    const crypto = cryptographyAndPrivacy();
    const tools = toolsAndCollaboration();
    return (
        <div className="coding-skills">
            <CodingSkillsSection themeSkills={languages} />
            <CodingSkillsSection themeSkills={backend} />
            <CodingSkillsSection themeSkills={rust} />
            <CodingSkillsSection themeSkills={frontendandweb} />
            <CodingSkillsSection themeSkills={cloud} />
            <CodingSkillsSection themeSkills={databases} />
            <CodingSkillsSection themeSkills={devops} />
            <CodingSkillsSection themeSkills={monitoring} />
            <CodingSkillsSection themeSkills={messaging} />
            <CodingSkillsSection themeSkills={crypto} />
            <CodingSkillsSection themeSkills={tools} />
        </div>
    )
}