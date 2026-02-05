
import { Project } from '../types';

const projectsData: Project[] = [
  {
    "id": 1,
    "slug": "smart-library",
    "title": "Secure Smart Library System",
    "description": "Enterprise-grade library management backend with robust security protocols and analytics.",
    "tags": ["Backend", "Security", "FastAPI"],
    "github": "https://github.com",
    "demo": "https://demo.com",
    "featured": true,
    "resume_points": [
      "Implemented JWT-based stateless authentication with automatic token rotation.",
      "Architected a relational database schema optimized for complex library transactions.",
      "Designed a secure file upload system with mime-type validation and malware scanning hooks."
    ],
    "details": {
      "architecture": "Built with FastAPI for asynchronous performance, utilizing PostgreSQL for persistence and Redis for caching search results.",
      "challenges": "Managing race conditions during peak borrowing hours while maintaining data integrity across distributed nodes.",
      "security": "Implemented Argon2id for password hashing, rate limiting per user, and comprehensive OWASP Top 10 mitigation.",
      "improvements": "Planning to transition to a microservices architecture using gRPC for inter-service communication."
    }
  },
  {
    "id": 2,
    "slug": "network-sniff",
    "title": "PySniff: Advanced Network Tool",
    "description": "A Python-based packet analysis tool focusing on intrusion detection and forensic logging.",
    "tags": ["Cybersecurity", "Networking", "Python"],
    "github": "https://github.com",
    "featured": true,
    "resume_points": [
      "Developed custom BPF filters for targeted packet capture.",
      "Built a real-time alerting system for common network attacks like ARP spoofing."
    ],
    "details": {
      "architecture": "Utilizes Scapy for low-level packet manipulation and Click for the CLI interface.",
      "challenges": "Optimizing packet processing pipelines to handle 1Gbps traffic without significant drops.",
      "security": "Ensures forensic logs are cryptographically signed to prevent tampering.",
      "improvements": "Adding support for TLS decryption using provided private keys for localized debugging."
    }
  },
  {
    "id": 3,
    "slug": "go-auth-vault",
    "title": "AuthVault Microservice",
    "description": "High-performance authentication service written in Go, focusing on OAuth2 and OpenID Connect.",
    "tags": ["Backend", "Go", "Fullstack"],
    "github": "https://github.com",
    "featured": false,
    "resume_points": [
      "Achieved 95% test coverage using unit and integration testing.",
      "Integrated with HashiCorp Vault for secure credential management."
    ],
    "details": {
      "architecture": "Stateless Go service using Clean Architecture principles.",
      "challenges": "Implementing strict OAuth2 flows according to latest RFCs.",
      "security": "Enforced HSTS, CSP, and strict CORS policies.",
      "improvements": "Adding WebAuthn support for hardware-based MFA."
    }
  }
];

export default projectsData;
