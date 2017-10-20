package com.sandbox.springboot.controller.util;

/**
 * Created by amatriuc on 10/19/2017.
 */
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
/**
 * Utility class for HTTP headers creation.
 * Form more details see { @linktourl https://github.com/jhipster/jhipster-sample-app/blob/master/src/main/java/io/github/jhipster/sample/web/rest/util/HeaderUtil.java }
 */
public class HeaderUtil {

    private static final Logger log = LoggerFactory.getLogger(HeaderUtil.class);

    private static final String APPLICATION_NAME = "amsoftElectronicGradeBook";

    private HeaderUtil() {
    }

    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-amsoft-electronic-grade-book-alert", message);
        headers.add("X-amsoft-electronic-grade-book-params", param);
        return headers;
    }

    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert(APPLICATION_NAME + "." + entityName + ".created", param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert(APPLICATION_NAME + "." + entityName + ".updated", param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert(APPLICATION_NAME + "." + entityName + ".deleted", param);
    }

    public static HttpHeaders createFailureAlert(String entityName, String errorKey, String defaultMessage) {
        log.error("Entity processing failed, {}", defaultMessage);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-amsoftElectronicGradeBook-error", "error." + errorKey);
        headers.add("X-amsoftElectronicGradeBook-params", entityName);
        return headers;
    }
}
