<?php

namespace App\Rules;

use EditorJS\EditorJS;
use EditorJS\EditorJSException;
use Illuminate\Contracts\Validation\Rule;

class EditorJsValidationRules implements Rule
{
    protected $tools = [
        'header', 'paragraph', 'image', 'list', 'code', 'table', 'quote', 'delimiter'
    ];

    protected $configuration = [];

    protected $exception;

    public function __construct()
    {
        foreach ($this->tools as $tool) {
            $this->$tool();
        }

        $this->configuration = json_encode(array("tools" => $this->configuration));
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
                    "required" => true,
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
                                    "required" => false,
                                    "type" => "string",
                                    "allowedTags" => "i,b,u,a[href]"
                                ]
                            ]
                        ]
                    ]
                ]
            ];
    }

    public function delimiter()
    {
        return $this->configuration['delimiter'] =
            [
                "-" => [
                    "canBeOnly" => []
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
                ],
                "stretched" =>
                [
                    "type" => "boolean",
                ],
                "withBackground" =>
                [
                    "type" => "boolean",
                ],
            ];
    }


    public function passes($attribute, $value)
    {
        if(gettype($value) == 'string') return true;
        if(empty($value['blocks'])) return false;
        try {
           return new EditorJS(json_encode($value), $this->configuration);
        } catch (EditorJSException $e) {
            $this->exception = $e;
            return false;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return $this->exception;
    }
}
