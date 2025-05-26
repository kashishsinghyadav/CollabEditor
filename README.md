   # 📝 Collaborative Distributed Text Editor

A  real-time **collaborative text editor** that uses **CRDTs** (Conflict-free Replicated Data Types) to enable conflict-free concurrent editing across multiple users. This project is inspired by tools like Google Docs and Notion, where users can collaboratively edit content simultaneously without overwriting each other's changes.

The editor supports **rich text formatting**, **offline editing**, **local file export**, and is built using scalable technologies such as **React**, **Vite**, and **Quill**. The system is designed to integrate **WebSocket-based real-time communication**, **CRDT merging**, **rate limiting**, and **authentication**, making it suitable for distributed, multi-user applications.

---

## 📌 Project Goals

- Provide a **reliable and scalable** real-time text editing experience
- Handle **concurrent user editing** using CRDT (RGA)
- Support **offline-first editing** with automatic sync upon reconnect
- Allow users to **save their content locally**

---

## 🚀 Key Features

-  Rich-text editor using **Quill.js**
-  Built with **React** + **Vite** + **TypeScript**
- Local save to `.html` files (download)
-  WebSocket layer stubbed for real-time sync
- Modular CRDT engine (Replicated Growable Array)
- API-first design for easy backend integration
-  IndexedDB for offline edit queue 
-  CRDT merge logic in Go backend 
-  JWT-based auth system 
-  Redis-powered rate limiting 

---

## 🧱 Tech Stack

### Frontend
- **React + Vite** – Modern fast development experience
- **TypeScript** – Type safety and maintainability
- **Quill.js** – Rich-text editor
- **React-Quill** – React wrapper for Quill
- **IndexedDB** – Offline-first edit persistence 
- **JWT** – Token-based authentication
- **WebSocket Client** – Real-time sync interface (mocked for now)

### Backend (Planned)
- **Go (Golang)** – High-performance backend server
- **Gorilla WebSocket** – Bi-directional communication
- **Firebase Auth** – Optional user auth provider
- **Redis** – Pub/sub + rate limiting
- **PostgreSQL** – Document metadata storage
- **CRDT RGA** – Merge engine for concurrent document edits

---


