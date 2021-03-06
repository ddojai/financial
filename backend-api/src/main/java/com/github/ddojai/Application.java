package com.github.ddojai;

import com.github.ddojai.config.AppProperties;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing      // JPA Auditing 활성화
@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class Application {
  private static final String APPLICATION_LOCATIONS = "spring.config.location="
    + "classpath:application.yml,"
    + "classpath:application-oauth.yml,"
    + "classpath:application-datasource.yml";

  public static void main(String[] args) {
    new SpringApplicationBuilder(Application.class)
      .properties(APPLICATION_LOCATIONS)
      .run(args);
  }
}