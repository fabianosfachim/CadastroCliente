SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE OR ALTER PROCEDURE [dbo].[sp_ListarEstado]
AS
BEGIN

 SELECT  [id]
      ,[nomeEstado]
      ,[siglaEstado]
  FROM [dbo].[tb_estado] WITH (NOLOCK);

END
GO