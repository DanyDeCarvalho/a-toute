"use client";

import React from "react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  AlignCenter,
  AlignLeft,
  AlignRight,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Toolbar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex w-full flex-wrap items-start justify-between rounded-tl-md rounded-tr-md border">
      <ToggleGroup
        className="flex w-full flex-wrap items-start justify-between rounded-tl-md rounded-tr-md border"
        type="multiple"
      >
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
          value="bold"
          aria-label="Toggle bold"
        >
          <Bold className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={editor.isActive("italic") ? "bg-blue-500 text-white" : ""}
          value="italic"
          aria-label="Toggle italic"
        >
          <Italic className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline") ? "bg-blue-500 text-white" : ""
          }
          value="underline"
          aria-label="Toggle underline"
        >
          <Underline className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? "!bg-blue-500 !text-white"
              : ""
          }
          value="heading"
          aria-label="Toggle heading"
        >
          <Heading2 className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={editor.isActive("strike") ? "bg-blue-500 text-white" : ""}
          value="strike"
          aria-label="Toggle strike"
        >
          <Strikethrough className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList") ? "bg-blue-500 text-white" : ""
          }
          value="bulletList"
          aria-label="Toggle bulletList"
        >
          <List className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList") ? "bg-blue-500 text-white" : ""
          }
          value="orderedList"
          aria-label="Toggle orderedList"
        >
          <ListOrdered className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setBlockquote().run();
          }}
          className={
            editor.isActive("blockquote") ? "bg-blue-500 text-white" : ""
          }
          value="blockquote"
          aria-label="Toggle blockquote"
        >
          <Quote className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("left").run();
          }}
          className={
            editor.isActive({ textAlign: "left" })
              ? "bg-blue-500 text-white"
              : ""
          }
          value="left"
          aria-label="Toggle left"
        >
          <AlignLeft className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("center").run();
          }}
          className={
            editor.isActive({ textAlign: "center" })
              ? "bg-blue-500 text-white"
              : ""
          }
          value="center"
          aria-label="Toggle center"
        >
          <AlignCenter className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("right").run();
          }}
          className={
            editor.isActive({ textAlign: "right" })
              ? "bg-blue-500 text-white"
              : ""
          }
          value="right"
          aria-label="Toggle right"
        >
          <AlignRight className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={editor.isActive("undo") ? "bg-blue-500 text-white" : ""}
          value="undo"
          aria-label="Toggle undo"
        >
          <Undo className="h-3.5 w-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={editor.isActive("redo") ? "bg-blue-500 text-white" : ""}
          value="redo"
          aria-label="Toggle redo"
        >
          <Redo className="h-3.5 w-3.5" />
        </ToggleGroupItem>

        <Select
          onValueChange={(value) => {
            editor.chain().focus().setColor(value).run();
          }}
        >
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="Noir" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Couleurs</SelectLabel>
              <SelectItem value="#000000">Noir</SelectItem>
              <SelectItem value="#fd0d0d">Rouge</SelectItem>
              <SelectItem value="#2fdc0d">Vert</SelectItem>
              <SelectItem value="#0a81f1">Bleu</SelectItem>
              <SelectItem value="#f1960a">Orange</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </ToggleGroup>
    </div>
  );
}
