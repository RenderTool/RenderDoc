---
title: c++5.fstream|文件操作
order : 5
category:
  - c++
---

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
C++模板中有没有可以对文件读写操作的模板类？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
有啊，fstream就是
</chatmessage>


| 数据类型     | 描述                                                      |
|----------|---------------------------------------------------------|
| ofstream | 输出文件流，用于创建文件并向文件写入信息。                                   |
| ifstream | 输入文件流，用于从文件读取信息。                                        |
| fstream  | 文件流，同时具有 ofstream 和 ifstream 功能，可以创建文件，向文件写入信息，从文件读取信息。 |

| 步骤 | 操作                  | 代码示例                                                   |
|----|---------------------|--------------------------------------------------------|
| 1  | 包含头文件               | `#include <fstream>`                                   |
| 2  | 打开文件（文件输入流）         | `std::ifstream inputFile("input.txt");`                |
| 3  | 打开文件（文件输出流）         | `std::ofstream outputFile("output.txt");`              |
| 4  | 打开文件（文件输入和输出流）      | `std::fstream file("data.txt", std::ios::in            | std::ios::out);` |
| 5  | 检查文件是否成功打开          | `if (inputFile.is_open()) { /* 文件成功打开，进行读取操作 */ }`     |
| 6  | 读取操作（从文件中读取数据）      | `int value; inputFile >> value;`                       |
| 7  | 写入操作（向文件中写入数据）      | `outputFile << "Hello, File!";`                        |
| 8  | 读写操作（文件输入和输出流的读写操作） | `file >> value; file << "Data";`                       |
| 9  | 关闭文件流               | `inputFile.close(); outputFile.close(); file.close();` |


## 基本用法

### 1. **包含头文件：**

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

首先，你需要包含 `<fstream>` 头文件。

</chatmessage>

   ```cpp
   #include <fstream>
   ```

### 2. **打开文件：**

<chatmessage avatar="../../../assets/emoji/new5.png" :avatarWidth="40" alignLeft>

使用文件流对象打开要读取或写入的文件。对于输入流（读取文件），使用 `ifstream`，对于输出流（写入文件），使用 `ofstream`。

</chatmessage>


   ```cpp
   // 文件输入流
   std::ifstream inputFile("input.txt");

   // 文件输出流
   std::ofstream outputFile("output.txt");

   // 文件输入和输出流
   std::fstream file("data.txt", std::ios::in | std::ios::out);
   ```

   在上述代码中，`inputFile` 用于读取 "input.txt" 文件，`outputFile` 用于写入 "output.txt" 文件，而 `file` 同时用于读取和写入 "data.txt" 文件。

### 3. **检查文件是否成功打开：**

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
在打开文件后，你应该检查文件是否成功打开。如果文件打开失败，可能是因为文件不存在或者没有读写权限。
</chatmessage>

   ```cpp
   if (inputFile.is_open()) {
       // 文件成功打开，进行读取操作
   } else {
       // 文件打开失败，处理错误
   }
   ```

### 4. **读取和写入操作：**

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

对于输入流，你可以使用类似 `>>` 运算符进行从文件读取的操作。对于输出流，你可以使用 `<<` 运算符进行向文件写入的操作。

</chatmessage>


   ```cpp
   int value;
   inputFile >> value; // 从文件读取一个整数

   outputFile << "Hello, File!"; // 向文件写入字符串
   ```

   对于文件输入和输出流，你可以使用 `<<` 和 `>>` 运算符进行读取和写入操作。

### 5. **关闭文件：**

<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
在完成文件操作后，记得关闭文件流。这有助于释放相关资源。
</chatmessage>

   ```cpp
   inputFile.close();
   outputFile.close();
   file.close();
   ```
<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
当对象被销毁时，文件流也会自动关闭，但显式关闭文件是个好的实践，特别是在程序较大或长时间运行时。
</chatmessage>

### 完整案例

```cpp
#include <iostream>
#include <fstream>

// 读取文件函数
std::string readFile(const std::string& filePath) {
    std::ifstream inputFile(filePath);

    // 检查文件是否成功打开
    if (inputFile.is_open()) {
        std::string text;

        // 从文件读取内容
        inputFile >> text;

        // 关闭文件流
        inputFile.close();

        return text;
    } else {
        // 文件打开失败，处理错误
        std::cerr << "Error opening file." << std::endl;
        return "";
    }
}

// 写入文件函数
void writeFile(const std::string& filePath, const std::string& content) {
    std::ofstream outputFile(filePath);

    // 检查文件是否成功打开
    if (outputFile.is_open()) {
        // 向文件写入内容
        outputFile << content;

        // 关闭文件流
        outputFile.close();
    } else {
        // 文件打开失败，处理错误
        std::cerr << "Error opening file." << std::endl;
    }
}

int main() {
    std::string filePath;
    std::cout << "输入要打开的文件地址例如 C:\\test.txt" << std::endl;
    std::cin >> filePath;

    // 读取文件
    std::string content = readFile(filePath);
    if (!content.empty()) {
        std::cout << "Read value from file: " << content << std::endl;
    }

    // 写入文件
    std::cout << "输入写入的内容：" << std::endl;
    std::string inputContent;
    std::cin >> inputContent;
    writeFile(filePath, inputContent);

    return 0;
}
```