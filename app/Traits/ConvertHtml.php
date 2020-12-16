<?php

namespace App\Traits;


trait ConvertHtml
{
    public function getHtml($value)
    {
        $value = json_decode($value);
        if (!isset($value->blocks)) return $value;

        $body = "";

        foreach ($value->blocks as $block)
            switch ($block->type) {
                case "header":
                    $body .= "<h{$block->data->level} class='text-teal-700 text-base pt-2'>{$block->data->text}</h{$block->data->level}>";
                    break;
                case "paragraph":
                    $body .= "<p class='text-sm text-gray-700 pb-2'>{$block->data->text}</p>";
                    break;
                case "list":
                    if ($block->data->style == "ordered") {
                        $body .= "<ul class='list-outside md:list-inside list-decimal text-sm'>";
                        foreach ($block->data->items as $list) {
                            $body .= "<li>{$list}</li>";
                        };
                        $body .= "</ul>";
                    } else if ($block->data->style == "unordered") {
                        $body .= "<ul class='list-outside md:list-inside list-disc text-sm'>";
                        foreach ($block->data->items as $list) {
                            $body .= "<li>{$list}</li>";
                        };
                        $body .= "</ul>";
                    };
                    break;
                case "quote":
                    $body .= "
                <blockquote class='flex flex-wrap flex-col bg-indigo-100 text-indigo-500 border-l-8 italic border-teal-400 px-4 py-3 text-sm'> 
                {$block->data->text}
                <span class='flex justify-end text-sm text-indigo-700 font-semibold pt-2'>
                {$block->data->caption}
                </span>
              </blockquote>
                ";
                    break;
                case "delimiter":
                    $body .= "<div class='ce-delimiter cdx-block'></div>";
                    break;
                case "image":
                    $body .= "<img class='object-cover h-full w-full my-4' loading='lazy' src=". $block->data->file->url ."></img>";
                    break;
            }
        return $body;
    }
}
