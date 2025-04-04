"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function PxToRemConverter() {
  const [pxValue, setPxValue] = useState(16);
  const [baseSize, setBaseSize] = useState(16);
  const [darkMode, setDarkMode] = useState(false);
  const remValue = (pxValue / baseSize).toFixed(3);
  const emValue = (pxValue / baseSize).toFixed(3);
  const percentValue = ((pxValue / baseSize) * 100).toFixed(2);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Card className="w-full max-w-sm p-4 text-center">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">PX to REM, EM, % Converter</h2>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          <Input
            type="number"
            value={pxValue}
            onChange={(e) => setPxValue(e.target.value)}
            placeholder="Enter PX value"
            className="text-center"
          />
          <Input
            type="number"
            value={baseSize}
            onChange={(e) => setBaseSize(e.target.value)}
            placeholder="Base font size (default 16px)"
            className="text-center"
          />
          <div className="space-y-2">
            <p className="text-lg font-medium">{remValue} REM <Button onClick={() => copyToClipboard(remValue)}>Copy</Button></p>
            <p className="text-lg font-medium">{emValue} EM <Button onClick={() => copyToClipboard(emValue)}>Copy</Button></p>
            <p className="text-lg font-medium">{percentValue}% <Button onClick={() => copyToClipboard(percentValue)}>Copy</Button></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
