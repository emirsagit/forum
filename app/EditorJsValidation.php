<?php

namespace App;

use EditorJS\EditorJS;

class EditorJsValidation
{
    protected $tools = [
        'header', 'paragraph', 'image', 'list', 'code', 'table', 'quote'
    ];

    protected $configuration = [];

    protected $body;


    public function __construct($body)
    {
        $this->body = json_encode($body);
    }


    public function header()
    {
        return $this->configuration['header'] =
            [
                "text" =>
                [
                    "type" => "string",
                    "required" => true,
                    "allowedTags" => "b,i,a[href]"
                ],
                "level" =>
                [
                    "type" => "int",
                    "canBeOnly" => [2, 3, 4]
                ]
            ];
    }

    public function list()
    {
        return $this->configuration['list'] =
            [
                "style" =>
                [
                    "type" => "string",
                    "canBeOnly" => ["ordered", "unordered"]
                ],
                "items" =>
                [
                    "type" => "array",
                    "data" =>
                    [
                        "-" =>
                        [
                            "type" => "string",
                            "allowedTags" => "i,b,u,a[href]"
                        ]
                    ]
                ]
            ];
    }


    public function paragraph()
    {
        return $this->configuration['paragraph'] =
            [
                "text" =>
                [
                    "type" => "string",
                    "required" => true,
                    "allowedTags" => "b,i,a[href],code"
                ],
            ];
    }

    public function table()
    {
        return $this->configuration['table'] =
            [
                "content" =>
                [
                    "type" => "array",
                    "data" =>
                    [
                        "-" =>
                        [
                            "type" => "array",
                            "data" =>
                            [
                                "-" =>
                                [
                                    "type" => "string",
                                    "required" => false,
                                    "allowedTags" => "i,b,u,a[href]"
                                ]
                            ]
                        ]
                    ]
                ]
            ];
    }

    public function code()
    {
        return $this->configuration['code'] =
            [
                "code" =>
                [
                    "type" => "string",
                    "allowedTags" => "*"
                ],
            ];
    }

    public function quote()
    {
        return $this->configuration['quote'] =
            [
                "text" =>
                [
                    "type" => "string",
                    "allowedTags" => "i,b,u,a[href]"
                ],
                "caption" =>
                [
                    "type" => "string",
                    "allowedTags" => "i,b,u,a[href]"
                ],
                "alignment" =>
                [
                    "type" => "string",
                    "canBeOnly" => ["left", "center"]
                ]
            ];
    }

    public function image()
    {
        return $this->configuration['image'] =
            [
                "file" =>
                [
                    "type" => "array",
                    "required" => true,
                    "data" =>
                    [
                        "url" => [
                            "type" => "string",
                        ]
                    ]
                ],
                "caption" =>
                [
                    "type" => "string",
                ],
                "withBorder" =>
                [
                    "type" => "boolean",
                    "required" => true,
                ],
                "stretched" =>
                [
                    "type" => "boolean",
                    "required" => true,
                ],
                "withBackground" =>
                [
                    "type" => "boolean",
                    "required" => true,
                ],
            ];
    }

    public function get()
    {
        foreach ($this->tools as $tool) {
            $this->$tool();
        }

        $this->configuration = json_encode(array("tools" => $this->configuration));
        // dd($this->configuration);

        $editor = new EditorJS($this->body, $this->configuration);

        return $editor->getBlocks();
    }
}
