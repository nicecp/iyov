<?php
namespace Applications\iyov\Lib;

/**
 * Http协议解析
 */
class Http {
	/**
	 * 检验请求包是否完整
	 */
	public static function input($data)
	{
		if (strpos($data, "\r\n\r\n") === false) {
			return 0;
		}

		list($header, $body) = explode("\r\n\r\n", $data);
		if (0 === strpos($header, "POST")) {
            // find Content-Length
            $match = array();
            if (preg_match("/\r\nContent-Length: ?(\d+)/i", $header, $match)) {
                $contentLength = $match[1];
                if ($contentLength <= strlen($body)) {
                	return strlen($header) + 4 + $contentLength;
                }
            } else {
                return 0;
            }
        }

        return strlen($header) + 4;
	}

	/**
	 * 检查响应包是否完整
	 */
	public static function output($data)
	{
		if (strpos($data, "\r\n\r\n") === false) {
			return 0;
		}

		list($header, $body) = explode("\r\n\r\n", $data);
		if (preg_match("/\r\nContent-Length: ?(\d+)/i", $header, $match)) {
			$contentLength = $match[1];
			if ($contentLength <= strlen($body)) {
				return strlen($header) + 4 + $contentLength;
			}
			return 0;
		} else if (FALSE !== strpos($header, 'Transfer-Encoding: chunked')) {
			$spices = explode("\r\n", $body);
			if (count($spices) < 3 && count($spices) % 2 != 1) {
				// 最少包涵三个部分
				return 0;
			}
			return array_pop($spices) != 0 ? 0 : strlen($header) + 4 + strlen($body);
		}
        return strlen($header) + 4;
		
	}

	/**
	 * 返回Content-Type
	 *
	 * @param string $header
	 * @return string 
	 */
	public static function contentType($header = '')
	{
		if (preg_match("/Content-Type: \S+\s*\S*\r\n/", $header, $match)) {
			$spices = explode(" ", $match[0]);
			$spices = explode(";", $spices[1]);
			return $spices[0];
		}

		return "";
	}

	public static function contentEncoding($header)
	{
		if (preg_match("/Content-Encoding: (\w+)/", $header, $match)) {
			$spices = explode(" ", $match[0]);
			return $spices[1];
		}

		return "";
	}
}