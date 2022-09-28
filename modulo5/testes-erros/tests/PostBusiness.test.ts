import { PostBusiness } from "../src/business/PostBusiness"
import { BaseError } from "../src/errors/BaseError"
import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, IRemoveLikeInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve retornar uma lista de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(4)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post).toBeInstanceOf(Post)
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Teste do mock")
        expect(response.post.getLikes()).toBe(0)
        expect(response.post.getUserId()).toBe("id-mock")
    })


    test("Deve deletar um post", async () => {
        const input: IDeletePostInputDTO = {
            token: "token-mock-normal",
            postId: "201" 
        }

        const response = await postBusiness.deletePost(input)

        expect(response.message).toBe("Post deletado com sucesso")
    })

    test("Deve dar like em um post", async () => {
        const input: IAddLikeInputDTO = {
            token: "token-mock-normal",
            postId: "202"
        };

        const response = await postBusiness.addLike(input)

        expect(response.message).toBe("Like realizado com sucesso")
    })

    test("Deve dar dislike em um post", async () => {
        const input: IAddLikeInputDTO = {
            token: "token-mock-normal",
            postId: "201"
        };

        const response = await postBusiness.removeLike(input)

        expect(response.message).toBe("Like removido com sucesso")
    });


    test("Deve retornar erro ao tentar criar um post com token inválido", async () => {
        expect.assertions(2)

        const input: ICreatePostInputDTO = {
            token: "token-mock-invalido",
            content: "Teste do mock"
        }

        try {
            await postBusiness.createPost(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    });

    test("Deve retornar erro ao tentar criar um post com conteúdo ou diferente de string", async () => {
        expect.assertions(2)

        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: 123
        } as unknown as ICreatePostInputDTO

        try {
            await postBusiness.createPost(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'content' inválido")
            }
        }
    });

    test("Deve retornar erro ao tentar criar um post com o centeudo menor que 10 caracteres", async () => {
        expect.assertions(2)

        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: ""
        }

        try {
            await postBusiness.createPost(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'content' inválido: mínimo de 1 caracteres")
            }
        }
    });

    test("Deve retornar erro ao listar posts com token inválido", async () => {
        expect.assertions(2)

        const input: IGetPostsInputDTO = {
            token: "token-mock-invalido"
        }

        try {
            await postBusiness.getPosts(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    });

    test("Deve retornar erro ao tentar deletar um post com token inválido", async () => {
        expect.assertions(2)

        const input: IDeletePostInputDTO = {
            token: "token-mock-invalido",
            postId: "201"
        }

        try {
            await postBusiness.deletePost(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    });

    test("Deve retornar erro ao tentar deletar um post que não existe", async () => {
        expect.assertions(2)

        const input: IDeletePostInputDTO = {
            token: "token-mock-normal",
            postId: "999"
        }

        try {
            await postBusiness.deletePost(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Post não encontrado")
            }
        }
    });

    test("Deve retornar erro ao tentar deletar um post que não pertence ao usuário", async () => {
        expect.assertions(2)

        const input: IDeletePostInputDTO = {
            token: "token-mock-normal",
            postId: "203"
        }

        try {
            await postBusiness.deletePost(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(403)
                expect(error.message).toBe("Permissão insuficiente")
            }
        }
    });

    test("Deve retornar erro ao tentar dar like em um post com token inválido", async () => {
        expect.assertions(2)

        const input: IAddLikeInputDTO = {
            token: "token-mock-invalido",
            postId: "201"
        }

        try {
            await postBusiness.addLike(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    });

    test("Deve retornar erro ao tentar dar like em um post que não existe", async () => {
        expect.assertions(2)

        const input: IAddLikeInputDTO = {
            token: "token-mock-normal",
            postId: "999"
        }

        try {
            await postBusiness.addLike(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Post não encontrado")
            }
        }
    });

    test("Deve retornar erro ao tentar dar like em um post que o usuário já deu like", async () => {
        expect.assertions(2)

        const input: IAddLikeInputDTO = {
            token: "token-mock-normal",
            postId: "201"
        }

        try {
            await postBusiness.addLike(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Já deu like")
            }
        }
    });

    test("Deve retornar erro ao tentar dar dislike em um post com token inválido", async () => {
        expect.assertions(2)

        const input: IAddLikeInputDTO = {
            token: "token-mock-invalido",
            postId: "201"
        }

        try {
            await postBusiness.removeLike(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    });

    test("Deve retornar erro ao tentar dar dislike em um post que não existe", async () => {
        expect.assertions(2)

        const input: IRemoveLikeInputDTO = {
            token: "token-mock-normal",
            postId: "999"
        }

        try {
            await postBusiness.removeLike(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Post não encontrado")
            }
        }
    });

    test("Deve retornar erro ao tentar dar dislike em um post que o usuário não deu like", async () => {
        expect.assertions(2)

        const input: IRemoveLikeInputDTO = {
            token: "token-mock-normal",
            postId: "202"
        }

        try {
            await postBusiness.removeLike(input)
        } catch (error: any) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Ainda não deu like")
            }
        }
    });



})