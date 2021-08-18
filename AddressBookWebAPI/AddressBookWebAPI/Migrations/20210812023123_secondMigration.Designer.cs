﻿// <auto-generated />
using System;
using AddressBookWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AddressBookWebAPI.Migrations
{
    [DbContext(typeof(AddressBookDBContext))]
    [Migration("20210812023123_secondMigration")]
    partial class secondMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AddressBookWebAPI.Models.Department", b =>
                {
                    b.Property<int>("DepartmentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DepartmentName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("PersonId")
                        .HasColumnType("int");

                    b.HasKey("DepartmentId");

                    b.HasIndex("PersonId");

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("AddressBookWebAPI.Models.Job", b =>
                {
                    b.Property<int>("JobTitleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("JobTitle")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("PersonId")
                        .HasColumnType("int");

                    b.HasKey("JobTitleId");

                    b.HasIndex("PersonId");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("AddressBookWebAPI.Models.Person", b =>
                {
                    b.Property<int>("PersonId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<int>("DateOfBirth")
                        .HasColumnType("int");

                    b.Property<int>("DepartmentId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("JobTitleId")
                        .HasColumnType("int");

                    b.Property<string>("MobileNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("Photo")
                        .HasColumnType("varbinary(max)");

                    b.HasKey("PersonId");

                    b.ToTable("Persons");
                });

            modelBuilder.Entity("AddressBookWebAPI.Models.Department", b =>
                {
                    b.HasOne("AddressBookWebAPI.Models.Person", null)
                        .WithMany("Departments")
                        .HasForeignKey("PersonId");
                });

            modelBuilder.Entity("AddressBookWebAPI.Models.Job", b =>
                {
                    b.HasOne("AddressBookWebAPI.Models.Person", null)
                        .WithMany("Jobs")
                        .HasForeignKey("PersonId");
                });

            modelBuilder.Entity("AddressBookWebAPI.Models.Person", b =>
                {
                    b.Navigation("Departments");

                    b.Navigation("Jobs");
                });
#pragma warning restore 612, 618
        }
    }
}
