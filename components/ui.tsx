import React from "react";
import { brand } from "@/lib/branding/config";
export function Shell({ children }: { children: React.ReactNode }) { return <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "#f8fafc", color: "#0f172a" }}>{children}</div>; }
export function Header() { return <header style={{ background: brand.primaryColor, color: "white", padding: 16 }}><strong>{brand.name}</strong></header>; }
export function Card({ children }: { children: React.ReactNode }) { return <div style={{ background: "white", padding: 16, borderRadius: 16, boxShadow: "0 1px 8px rgba(0,0,0,.06)" }}>{children}</div>; }
