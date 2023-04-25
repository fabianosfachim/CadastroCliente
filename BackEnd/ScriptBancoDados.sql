USE [bd_xgem]
GO

ALTER TABLE [dbo].[endereco] DROP CONSTRAINT [FK_tb_endereco_tb_estado]
GO
ALTER TABLE [dbo].[endereco] DROP CONSTRAINT [FK_tb_endereco_tb_cliente]
GO
ALTER TABLE [dbo].[endereco] DROP CONSTRAINT [DF_tb_endereco_ativo]
GO
ALTER TABLE [dbo].[cliente] DROP CONSTRAINT [DF_tb_cliente_ativo]
GO
/****** Object:  Table [dbo].[login]    Script Date: 4/19/2023 3:19:13 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[login]') AND type in (N'U'))
DROP TABLE [dbo].[login]
GO
/****** Object:  Table [dbo].[estado]    Script Date: 4/19/2023 3:19:13 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[estado]') AND type in (N'U'))
DROP TABLE [dbo].[estado]
GO
/****** Object:  Table [dbo].[endereco]    Script Date: 4/19/2023 3:19:13 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[endereco]') AND type in (N'U'))
DROP TABLE [dbo].[endereco]
GO
/****** Object:  Table [dbo].[cliente]    Script Date: 4/19/2023 3:19:13 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[cliente]') AND type in (N'U'))
DROP TABLE [dbo].[cliente]
GO
/****** Object:  Table [dbo].[cliente]    Script Date: 4/19/2023 3:19:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cliente](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[razaoSocial] [varchar](100) NOT NULL,
	[nomeFantasia] [varchar](150) NULL,
	[cpfCnpj] [varchar](15) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[ddd] [varchar](3) NOT NULL,
	[telefone] [varchar](15) NOT NULL,
	[nmUsuarioCadastro] [varchar](50) NOT NULL,
	[dtCadastro] [datetime] NOT NULL,
	[nmUsuarioAlteracao] [varchar](50) NULL,
	[dtAlteracao] [datetime] NULL
 CONSTRAINT [PK_tb_cliente] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[endereco]    Script Date: 4/19/2023 3:19:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[endereco](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[endereco] [varchar](80) NOT NULL,
	[complementoEndereco] [varchar](80) NULL,
	[numeroEndereco] [int] NOT NULL,
	[cep] [varchar](15) NOT NULL,
	[bairro] [varchar](40) NOT NULL,
	[idEstado] [int] NOT NULL,
	[nmUsuarioCadastro] [varchar](50) NOT NULL,
	[dtCadastro] [datetime] NOT NULL,
	[nmUsuarioAlteracao] [varchar](50) NULL,
	[dtAlteracao] [datetime] NULL,
	[idCliente] [int] NOT NULL,
 CONSTRAINT [PK_tb_endereco] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[estado]    Script Date: 4/19/2023 3:19:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[estado](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nomeEstado] [varchar](50) NOT NULL,
	[siglaEstado] [varchar](50) NOT NULL,
 CONSTRAINT [PK_tb_estado] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[login]    Script Date: 4/19/2023 3:19:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[login](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[nome] [varchar](50) NOT NULL,
	[nmUsuarioCadastro] [varchar](50) NOT NULL,
	[dtCadastro] [datetime] NOT NULL,
	[nmUsuarioAlteracao] [varchar](50) NULL,
	[dtAlteracao] [datetime] NULL,
	[ativo] [bit] NOT NULL,
 CONSTRAINT [PK_tb_login] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[estado] ON 
GO
INSERT [dbo].[estado] ([id], [nomeEstado], [siglaEstado]) VALUES (1, N'São Paulo', N'SP')
GO
INSERT [dbo].[estado] ([id], [nomeEstado], [siglaEstado]) VALUES (2, N'Rio de Janeiro', N'RJ')
GO
INSERT [dbo].[estado] ([id], [nomeEstado], [siglaEstado]) VALUES (3, N'Espirito Santo', N'ES')
GO
INSERT [dbo].[estado] ([id], [nomeEstado], [siglaEstado]) VALUES (4, N'Minas Gerais', N'MG')
GO
SET IDENTITY_INSERT [dbo].[estado] OFF
GO
SET IDENTITY_INSERT [dbo].[login] ON 
GO
INSERT [dbo].[login] ([id], [email], [password], [nome], [nmUsuarioCadastro], [dtCadastro], [nmUsuarioAlteracao], [dtAlteracao], [ativo]) VALUES (3, N'fabiano.fachim@alsofer.com', N'123456', N'Fabiano Spuri Fachim', N'administrador', CAST(N'2023-04-01T00:00:00.000' AS DateTime), NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[login] OFF
GO
ALTER TABLE [dbo].[cliente] ADD  CONSTRAINT [DF_tb_cliente_ativo]  DEFAULT ((1)) FOR [ativo]
GO
ALTER TABLE [dbo].[endereco] ADD  CONSTRAINT [DF_tb_endereco_ativo]  DEFAULT ((1)) FOR [ativo]
GO
ALTER TABLE [dbo].[endereco]  WITH CHECK ADD  CONSTRAINT [FK_tb_endereco_tb_cliente] FOREIGN KEY([idCliente])
REFERENCES [dbo].[cliente] ([id])
GO
ALTER TABLE [dbo].[endereco] CHECK CONSTRAINT [FK_tb_endereco_tb_cliente]
GO
ALTER TABLE [dbo].[endereco]  WITH CHECK ADD  CONSTRAINT [FK_tb_endereco_tb_estado] FOREIGN KEY([idEstado])
REFERENCES [dbo].[estado] ([id])
GO
ALTER TABLE [dbo].[endereco] CHECK CONSTRAINT [FK_tb_endereco_tb_estado]
GO
