package lab;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.boot.autoconfigure.domain.EntityScan;
@Configuration
@EnableJpaRepositories(basePackages="repository")
@EntityScan(basePackages="entity")
public class ApplicationConfig {
	 
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory(EntityManagerFactoryBuilder builder,DataSource dataSource) {
		return builder.dataSource(dataSource)
				.packages("entity")
				.build();
}

@Bean(name="transactionManager")
	public PlatformTransactionManager barTransactionManager(
			EntityManagerFactory factory) {
	return new JpaTransactionManager(factory);
}
}

