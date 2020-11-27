<?php

namespace App\Traits;


trait ConvertHtml
{
    public function getHtml($value)
    {
        $value = json_decode($value);
        if(! isset($value->blocks)) return $value;

        $body = "";

        foreach ($value->blocks as $block)
            switch ($block->type) {
                case "header":
                    $body .= "<h{$block->data->level} class='text-red-700 text-base'>{$block->data->text}</h{$block->data->level}>";
                    break;
                case "paragraph":
                    $body .= "<p class='text-sm text-gray-700'>{$block->data->text}</p>";
                    break;
                case "list":
                    if ($block->data->style == "ordered") {
                        $body .= "<ul class='list-outside md:list-inside list-decimal'>";
                        foreach ($block->data->items as $list) {
                            $body .= "<li>{$list}</li>";
                        };
                        $body .= "</ul>";
                    } else if ($block->data->style == "unordered") {
                        $body .= "<ul class='list-outside md:list-inside list-disc'>";
                        foreach ($block->data->items as $list) {
                            $body .= "<li>{$list}</li>";
                        };
                        $body .= "</ul>";
                    };
                    break;
                case "quote":
                    $body .= "
                <blockquote class='flex flex-wrap flex-col bg-indigo-100 text-indigo-700 border-l-8 italic border-indigo-400 px-4 py-3'> 
                {$block->data->text}
                <span class='flex justify-end text-sm text-indigo-400 font-semibold pt-2 underline'>
                {$block->data->caption}
                </span>
              </blockquote>
                ";
                    break;
                case "delimiter":
                    $body .= "<div class='ce-delimiter cdx-block'></div>";
                    break;
            }
        return $body;
    }
}
