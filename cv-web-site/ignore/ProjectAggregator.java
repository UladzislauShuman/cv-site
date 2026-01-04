package ignore;

import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class ProjectAggregator {

  // --- НАСТРОЙКИ ---

  // 1. Укажите путь к корневой папке вашего проекта.
  private static final String PROJECT_ROOT_PATH = ".";

  // 2. Укажите имя файла, в который будет записан результат.
  private static final String OUTPUT_FILE_NAME = "QA.txt";

  // 3. Перечислите расширения файлов, которые нужно включить.
  private static final Set<String> ALLOWED_EXTENSIONS = new HashSet<>(Arrays.asList(
        ".py", ".md", ".yml", ".yaml", ".toml", ".ini", ".mako", ".gitignore", ".lock", ".ftl",
        "Dockerfile", ".env", ".csv",
        ".json",
        ".ts"
        , ".ts"
        , ".svg"
        , ".mjs"
        , ".css"
        , ".tsx"
        , ".html"

  ));

  // 4. Перечислите папки, которые нужно ИСКЛЮЧИТЬ из сканирования.
  private static final Set<String> EXCLUDED_DIRS = new HashSet<>(Arrays.asList(
      ".git", ".idea",
    "__pycache__", 
    ".venv", "venv"
    //"versions"
    , "hw1-hangman"
    //,"backend"
    ,"backend/web_server"
    , "ignore"
    ,"node_modules"
    ,".next"

  ));

  // Перечислите ТОЧНЫЕ ИМЕНА ФАЙЛОВ, которые нужно ИСКЛЮЧИТЬ.
  private static final Set<String> EXCLUDED_FILES = new HashSet<>(Arrays.asList(
      "ProjectAggregator.java",
      "uv.lock",
    OUTPUT_FILE_NAME
  ));


  public static void main(String[] args) {
    Path rootDir = Paths.get(PROJECT_ROOT_PATH).toAbsolutePath();
    Path outputFile = rootDir.resolve(OUTPUT_FILE_NAME);
    StringBuilder contentBuilder = new StringBuilder();

    System.out.println("Начинаю сканирование проекта в папке: " + rootDir);

    try {
      Files.walkFileTree(rootDir, new SimpleFileVisitor<Path>() {

        @Override
        public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) {
          if (EXCLUDED_DIRS.contains(dir.getFileName().toString())) {
            System.out.println("-> Пропускаю папку: " + dir);
            return FileVisitResult.SKIP_SUBTREE;
          }
          return FileVisitResult.CONTINUE;
        }

        @Override
        public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
          String fileName = file.getFileName().toString();

          // Если файл в списке исключений по имени, пропускаем его.
          if (EXCLUDED_FILES.contains(fileName)) {
            System.out.println("-> Пропускаю файл из списка исключений: " + file);
            return FileVisitResult.CONTINUE;
          }

          // Проверяем, подходит ли файл по расширению или имени (для pom.xml)
          if (fileName.equals("pom.xml") || ALLOWED_EXTENSIONS.stream().anyMatch(fileName::endsWith)) {
            System.out.println("   + Добавляю файл: " + file);

            String relativePath = rootDir.relativize(file).toString().replace('\\', '/');
            String fileContent = Files.readString(file);

            contentBuilder.append("/// ").append(relativePath).append("\n");
            contentBuilder.append("\"").append(fileContent).append("\"\n\n");
          }
          return FileVisitResult.CONTINUE;
        }
      });

      Files.writeString(outputFile, contentBuilder.toString());
      System.out.println("\nГотово! Все файлы собраны в один: " + outputFile.toAbsolutePath());

    } catch (IOException e) {
      System.err.println("Произошла ошибка во время обработки файлов: " + e.getMessage());
      e.printStackTrace();
    }
  }
}