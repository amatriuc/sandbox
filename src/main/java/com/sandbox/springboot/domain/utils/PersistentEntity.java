//package com.sandbox.springboot.domain.utils;
//
//import lombok.Getter;
//import lombok.Setter;
//import org.apache.commons.lang3.ObjectUtils;
//import org.apache.commons.lang3.builder.EqualsBuilder;
//import org.apache.commons.lang3.builder.HashCodeBuilder;
//import org.apache.commons.lang3.builder.ToStringBuilder;
//
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.MappedSuperclass;
//import java.io.Serializable;
//
//@Getter
//@Setter
//@MappedSuperclass
//public abstract class PersistentEntity implements Serializable {
//
//  @Id
//  @GeneratedValue(strategy = GenerationType.IDENTITY)
//  private Long id;
//
//  @Override
//  public boolean equals(Object o) {
//    if (this == o) {
//      return true;
//    }
//
//    if (o == null || getClass() != o.getClass()) {
//      return false;
//    }
//
//    PersistentEntity that = (PersistentEntity) o;
//
//    return ObjectUtils.allNotNull(id, that.id) && new EqualsBuilder()
//      .append(id, that.id)
//      .isEquals();
//  }
//
//  @Override
//  public int hashCode() {
//    return new HashCodeBuilder(17, 37)
//      .append(id)
//      .toHashCode();
//  }
//
//  @Override
//  public String toString() {
//    return new ToStringBuilder(this)
//      .append("id", id)
//      .toString();
//  }
//}
