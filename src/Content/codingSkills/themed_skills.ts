
export interface ThemedSkills {
    name: string,
    skills: string[],
}

export function programmingLanguages(): ThemedSkills {
    return {
        name: "Programming Languages",
        skills: [
            "Rust",
            "Python",
            "Java",
            "Typescript",
            "Javascript",
            "C",
        ]
    }
}

export function backendDistributedSystems(): ThemedSkills {
    return {
        name: "Microservices",
        skills: [
            "REST APIs",
            "gRPC",
            "WebSockets",
            "Distributed Systems",
            "Event-Driven Architecture",
            "Concurrent Programming",
            "Asynchronous Programming",
        ]
    }
}


export function rustEcosystem(): ThemedSkills {
    return {
        name: "Rust Ecosystem",
        skills: [
            "Tokio",
            "Axum",
            "Actix",
            "Rocket-rs",
            "Cargo",
        ]
    }
}

export function frontEndAndWeb(): ThemedSkills {
    return {
        name: "Frontend & Web",
        skills: [
            "React",
            "Yew-rs",
            "HTML",
            "CSS",
            "Tailwind",
            "Vite",
            "Webpack",
            "WebAssembly",
        ]
    }
}

export function cloudAndAWS(): ThemedSkills {
    return {
        name: "Cloud & AWS",
        skills: [
            "Lambda",
            "EC2",
            "EKS",
            "VPC",
            "S3",
            "CloudFront",
            "DynamoDB",
            "Aurora RDS",
            "Redshift",
            "SQS",
            "SNS",
            "EventBridge",
            "IAM",
            "AWS Secrets Manager",
            "KMS",
            "CloudWatch",
        ]
    }
}

export function databasesAndStorage(): ThemedSkills {
    return {
        name: "Databases & Storage",
        skills: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "DynamoDB",
            "Aurora RDS",
            "Redshift",
        ]
    }
}

export function devOpsAndInfrastructure(): ThemedSkills {
    return {
        name: "DevOps & Infrastructure",
        skills: [
            "Docker",
            "Kubernetes",
            "Terraform",
            "GitHub Actions",
            "GitLab CI/CD",
        ]
    }
}

export function monitoringAndObservability(): ThemedSkills {
    return {
        name: "Monitoring & Observability",
        skills: [
            "Datadog",
            "Prometheus",
            "Grafana",
            "CloudWatch",
        ]
    }
}

export function messagingAndStreaming(): ThemedSkills {
    return {
        name: "Messaging & Streaming",
        skills: [
            "Kafka",
            "SQS",
            "SNS",
            "EventBridge",
        ]
    }
}

export function cryptographyAndPrivacy(): ThemedSkills {
    return {
        name: "Cryptography & Privacy",
        skills: [
            "Public Key Cryptography",
            "Symmetric Encryption",
            "RSA",
            "AES",
            "ECDH",
            "PGP",
            "Homomorphic Encryption",
            "FHE",
            "ZK-SNARKs",
            "ZK-STARKs",
        ]
    }
}

export function toolsAndCollaboration(): ThemedSkills {
    return {
        name: "Tools & Collaboration",
        skills: [
            "Git",
            "Linux",
            "GitHub",
            "GitLab",
            "Jira",
            "Confluence",
        ]
    }
}
